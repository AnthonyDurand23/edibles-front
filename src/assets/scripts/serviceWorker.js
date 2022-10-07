self.addEventListener(`install`, () => {
    self.skipWaiting();
});

self.addEventListener(`push`, (event) => {
    const option = {
        requireInteraction: true,
        body: `Cliquez ici pour voir vos produits`,
        icon: `https://edibles.surge.sh/images/b1a6232f3517af487ad3..png`
    };
    let product = ``;
    event.data.json().count > 1 ? product = `produits bientôt périmés` : product = `produit bientôt périmé`;
    const promiseChain = self.registration.showNotification(`EDIBLES : Vous avez ${event.data.json().count} ${product} !`, option);
    event.waitUntil(promiseChain);
});

self.addEventListener(`notificationclick`, (event) => {
    const url = `https://edibles.surge.sh/stock`;
    event.notification.close();
    event.waitUntil(clients.openWindow(url));
});