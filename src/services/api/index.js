const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    auth: {
        login: `${API}/api/v1/${VERSION}/login`,
        profile: `${API}/api/v1/${VERSION}/profile`
    },
    products: {
        getProduct: (id) => `${API}/api/v1/${VERSION}/id`,
    },
};
export default endPoints