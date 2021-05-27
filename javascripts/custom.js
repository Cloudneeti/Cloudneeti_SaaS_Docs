function generateBreadCrumb() {
    var pagePath = document.location.pathname.replace(/^\/|\/$/g, '').split('/');
    let linksHTML = "<ul class='breadcrumb'><li><a href='/'>Home</a></li>";
    pagePath.forEach(function(path,i) {
        let label = path.charAt(0).toUpperCase()+path.slice(1);
        label = label.replace(/([A-Z])/g, ' $1').trim();
        if(i === pagePath.length-1){
            linksHTML += "<li>"+label+"</li>";
        } else {
            linksHTML += "<li><a href='/"+path+"'>"+label+"</a></li>";
        }
    });
    linksHTML += "</ul>";
    //var d1 = document.getElementById('breadcrumb');
    //d1.insertAdjacentHTML('beforeend',linksHTML);
}
window.onload = generateBreadCrumb;