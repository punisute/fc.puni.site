const cb = new ClipboardJS('.btn');

const id = window.location.hash.substring(1);
if (/^[a-z0-9]{8}$/i.test(id)) {
    document.getElementById("friend-code").value = id;
    document.getElementById("code-display").innerText = id;
}
