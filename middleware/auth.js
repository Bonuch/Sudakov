export default async function({ store, redirect, req, route, app: {$cookies} }) {
    if (!store.getters["users/isAuth"]) {
        const authCookie = $cookies.get('authUser');
        if (authCookie) {
            const authed = await store.dispatch('users/getUserByToken')
            if (authed) {
                return route.forward;
            }
            $cookies.remove('authUser')
        }
        return redirect('/bodygraph/auth');
    }
}
