function childreAccess() {
    const list = document.getElementById("menu");
    return list.children[0].innerHTML; 
}
module.exports = childreAccess;