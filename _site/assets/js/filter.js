(function () {
  'use strict';

  function getActiveTag() {
    const hash = window.location.hash.slice(1);
    return hash ? decodeURIComponent(hash) : 'all';
  }

  function setActiveTag(tag) {
    if (tag === 'all') {
      history.replaceState(null, '', window.location.pathname);
    } else {
      history.replaceState(null, '', '#' + encodeURIComponent(tag));
    }
  }

  function applyFilter(activeTag) {
    const cards = document.querySelectorAll('[data-tags]');

    cards.forEach(function (card) {
      if (activeTag === 'all') {
        card.classList.remove('item-hidden');
      } else {
        const tags = (card.getAttribute('data-tags') || '').split(' ').map(function (t) { return t.trim(); });
        if (tags.includes(activeTag)) {
          card.classList.remove('item-hidden');
        } else {
          card.classList.add('item-hidden');
        }
      }
    });

    // Hide section headings when all their cards are hidden
    ['done-list', 'planned-list'].forEach(function (listId) {
      const list = document.getElementById(listId);
      if (!list) return;
      const section = list.closest('section');
      if (!section) return;
      const visible = list.querySelectorAll('[data-tags]:not(.item-hidden)');
      section.style.display = visible.length === 0 ? 'none' : '';
    });

    // Update pill highlight states
    document.querySelectorAll('[data-tag]').forEach(function (pill) {
      const pillTag = pill.getAttribute('data-tag');
      if (pillTag === activeTag || (activeTag === 'all' && pillTag === 'all')) {
        pill.classList.add('active-tag');
      } else {
        pill.classList.remove('active-tag');
      }
    });
  }

  function init() {
    const pills = document.querySelectorAll('[data-tag]');
    if (pills.length === 0) return;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        const tag = pill.getAttribute('data-tag');
        setActiveTag(tag);
        applyFilter(tag);
      });
    });

    // Apply filter from URL hash on load
    applyFilter(getActiveTag());

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', function () {
      applyFilter(getActiveTag());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
