document.getElementById('pageTitle').append(window.location.pathname);
let checkSessStorage = JSON.parse(sessionStorage.getItem('loadChecks'));
enableIcon();
function enableIcon() {
     for (let i = 0; i < checkSessStorage.length; i++) {
          var element = document.getElementById('lcIcon');
          if (window.location.pathname === checkSessStorage[i].uri_type && checkSessStorage[i].flag === 'ON') {
               element.classList.remove("dispnone");
               element.classList.toggle("loadChecks");
               break;
          }
     }
}
