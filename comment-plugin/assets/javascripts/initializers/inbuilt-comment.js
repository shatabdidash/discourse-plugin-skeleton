import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'discourse-inbuilt-comment-plugin',

  initialize() {
    withPluginApi('0.8', api => {
      api.onPageChange(() => {
        // Find all reply buttons on the current page
        const replyButtons = document.querySelectorAll('.post-controls button.reply');

        // Loop through each reply button and add a click event listener
        replyButtons.forEach(replyButton => {
          replyButton.addEventListener('click', () => {
            const post = replyButton.closest('.topic-post');

            // Check if the post is not null and doesn't already have an inbuilt comment
            if (post && !post.querySelector('.inbuilt-comment-container')) {
              const commentContainer = document.createElement('div');
              commentContainer.className = 'inbuilt-comment-container';
              commentContainer.innerHTML = 'This is an inbuilt comment.';
              post.appendChild(commentContainer);

              // Add a show/hide button for the comment
              const button = document.createElement('span');
              button.className = 'show-hide-button';
              button.textContent = 'Show Comment';
              button.addEventListener('click', () => {
                if (commentContainer.style.display === 'none') {
                  commentContainer.style.display = 'block';
                  button.textContent = 'Hide Comment';
                } else {
                  commentContainer.style.display = 'none';
                  button.textContent = 'Show Comment';
                }
              });
              post.appendChild(button);
            }
          });
        });
      });
    });
  },
};

