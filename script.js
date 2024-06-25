document.addEventListener('DOMContentLoaded', (event) => {
    var quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
            toolbar: '#toolbar'
        }
    });

    // Load content from local storage if available
    const savedContent = localStorage.getItem('quillContent');
    if (savedContent) {
        quill.root.innerHTML = savedContent;
    }

    // Save content to local storage
    document.querySelector('.ql-save').addEventListener('click', () => {
        const content = quill.root.innerHTML;
        localStorage.setItem('quillContent', content);
        alert('Document saved!');
    });
});
