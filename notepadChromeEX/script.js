document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const notepadContainer = document.querySelector('.notepad-container');
    const textarea = document.getElementById('notepad');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const closeBtn = document.getElementById('closeBtn');
    const wordCountDisplay = document.getElementById('wordCount');

    // Load saved content from storage
    chrome.storage.sync.get('content', ({ content }) => {
        if (content) {
            textarea.value = content;
            updateWordCount();
        }
    });

    // Save content to storage
    saveBtn.addEventListener('click', saveContent);

    // Clear content
    clearBtn.addEventListener('click', clearContent);

    // Close notepad window
    closeBtn.addEventListener('click', closeWindow);

    // Update word count
    textarea.addEventListener('input', updateWordCount);

    // Keyboard shortcuts
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            saveContent();
        } else if (event.ctrlKey && event.key === 'd') {
            event.preventDefault();
            clearContent();
        } else if (event.ctrlKey && event.key === 'w') {
            event.preventDefault();
            closeWindow();
        }
    });

    // Resize event listener
    window.addEventListener('resize', adjustNotepadSize);

    function saveContent() {
        try {
            const content = textarea.value;
            chrome.storage.sync.set({ 'content': content }, function () {
                console.log('Content saved');
            });
        } catch (error) {
            console.error('Error saving content:', error);
        }
    }

    function clearContent() {
        textarea.value = '';
        updateWordCount();
    }

    function closeWindow() {
        window.close();
    }

    function updateWordCount() {
        const words = textarea.value.trim().split(/\s+/).filter(Boolean);
        const wordCount = words.length;
        wordCountDisplay.textContent = `Word Count: ${wordCount}`;
    }

    function adjustNotepadSize() {
        const newWidth = notepadContainer.offsetWidth;
        const newHeight = notepadContainer.offsetHeight;
        textarea.style.width = `${newWidth}px`;
        textarea.style.height = `${newHeight}px`;
    }
});
