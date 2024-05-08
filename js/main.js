// JavaScript for handling Navigation, Searching, Interactions, and Initialization

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const headerToggle = document.getElementById('header-toggle');
  const searchInput = document.querySelector('.search input[type="text"]');
  const searchIcon = document.querySelector('.search i');

  // Toggle Navigation Menu
  headerToggle.addEventListener('click', () => {
      navbar.classList.toggle('show');
      headerToggle.classList.toggle('fa-times');
  });

  // Handle Search Functionality
  searchIcon.addEventListener('click', () => {
      alert(`Searching for: ${searchInput.value}`);
  });

  // Manage Active Link Highlighting and Dropdown Menus in Navigation
  document.querySelectorAll('.nav_link').forEach(link => {
      link.addEventListener('click', (event) => {
          if (link.classList.contains('nav_dropdown')) {
              const dropdownContent = link.nextElementSibling;
              dropdownContent.classList.toggle('show-dropdown');
              link.querySelector('.fa-chevron-down').classList.toggle('rotated');
          } else {
              document.querySelectorAll('.nav_link').forEach(l => l.classList.remove('active'));
              link.classList.add('active');
          }
          event.preventDefault();
      });
  });

  // Setup Interactions for Like, Dislike, Share, Save
  document.querySelectorAll('.icon').forEach(icon => {
      icon.addEventListener('click', () => {
          icon.classList.toggle('active');
      });
  });

  // Comment Handling: Posting and Toggling Replies
  const commentInput = document.querySelector('.comment_self input');
  commentInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter' && commentInput.value) {
          console.log(`Comment posted: ${commentInput.value}`);
          commentInput.value = ''; // Clear input after posting
      }
  });

  document.querySelectorAll('.tags').forEach(tag => {
      tag.addEventListener('click', () => {
          const details = tag.nextElementSibling;
          details.style.display = details.style.display === 'none' ? 'block' : 'none';
      });
  });

  // Night Mode Toggle
  const nightModeSwitch = document.querySelector('.night-mode-toggle');
  nightModeSwitch.addEventListener('click', () => {
      document.body.classList.toggle('night-mode');
  });
});
// Expand search input on focus and collapse on blur
function setupSearchInteraction() {
  const searchInput = document.querySelector('.search input[type="text"]');
  searchInput.addEventListener('focus', () => {
      searchInput.parentElement.classList.add('expand');
  });
  searchInput.addEventListener('blur', () => {
      searchInput.parentElement.classList.remove('expand');
  });
}
// Enhanced Search Functionality with Enter key
function enhancedSearchFunctionality() {
  const searchInput = document.querySelector('.search input[type="text"]');
  const searchIcon = document.querySelector('.search .fa-magnifying-glass');

  // Search when the search icon is clicked
  searchIcon.addEventListener('click', () => {
      executeSearch(searchInput.value);
  });

  // Search when Enter key is pressed
  searchInput.addEventListener('keypress', (event) => {
      if (event.key === "Enter") {
          executeSearch(searchInput.value);
          event.preventDefault(); // Prevent form submission if inside a form
      }
  });
}

// Function to execute search
function executeSearch(query) {
  console.log(`Searching for: ${query}`);
  // You can integrate actual search logic or API call here
}

function initialize() {
  showMenu('header-toggle', 'navbar');
  manageActiveLink();
  setupSearchInteraction();
  enhancedSearchFunctionality();
  // Call other functions as necessary
}

document.addEventListener('DOMContentLoaded', initialize);

document.addEventListener('DOMContentLoaded', function() {
  const notificationIcon = document.getElementById('notification-icon');
  const notificationsPopup = document.getElementById('notifications-popup');

  notificationIcon.addEventListener('click', () => {
    // Toggle the display of the notifications popup
    const isDisplayed = notificationsPopup.style.display !== 'none';
    notificationsPopup.style.display = isDisplayed ? 'none' : 'block';

    // Optionally, clear the notification alert style if needed
    notificationIcon.classList.remove('new-notification');
  });
});

// Optional: Function to add a 'new-notification' class to show there are unread notifications
function showNotificationAlert() {
  const notificationIcon = document.getElementById('notification-icon');
  notificationIcon.classList.add('new-notification');
}

// Call this function when there is a new notification
showNotificationAlert();
