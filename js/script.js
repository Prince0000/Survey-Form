document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('myForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Backend Not Connected: Submission Failed");
    });
});
