export default ({ store, app: { $axios, error, $cookies } }) => {
    $axios.onRequest(config => {
        const token = $cookies.get("authUser");

        if (token) {
            config.headers.common["Authorization"] = `Bearer ${token}`;
        }
    });

    $axios.onResponse(response => {
        // console.log('axios response:', response.status, typeof (response.data));
    });

    $axios.onRequestError(requestError => {
        // console.log('requestError: ', requestError);
    });
}
