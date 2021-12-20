import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Http from "../HttpClient";

/**
 * Création du contexte User
 */
const UserContext = createContext();

/**
 * Création du Provider User
 */
export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // fetch l'utilisateur connecté
    useEffect(() => {
        const connected = localStorage.getItem("connected");
        if (connected) {
            getMe();
        }
    }, []);

    /**
     * Récupérer l'utilisateur connecté
     * @returns {void}
     */
    const getMe = async () => {
        try {
            const { data } = await Http.get("user");
            setUser({
                ...data.user,
                celliers: data.celliers,
            });
        } catch (error) {
            setUser(false);
        }
    };

    /**
     * Login un utilisateur
     * @param {object} creds
     * @returns {void}
     */
    const login = async (creds) => {
        await Http.get("sanctum/csrf-cookie");
        const { data } = await Http.post("login", creds);
        sessionStorage.setItem("user", data.user.id);
        sessionStorage.setItem("privilege", data.user.privilege_id);
        localStorage.setItem("connected", "truth");
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
    };

    /**
     * Enregistrer un nouvel utilisateur
     * @param {object} creds
     * @returns {void}
     */
    const register = async (creds) => {
        const { data } = await Http.post("register", creds);
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
    };

    /**
     * @returns {void}
     */
    const registerAdmin = async (creds) => {
        const { data } = await Http.post("register", creds);
    };

    // enregistre le nouvel utilisateur
    const updateUsager = async (creds) => {
        const { data } = await Http.put(`/user/edit/${creds.id}`, creds);
    };

    // déconnecte l'utilisateur
    const logout = async () => {
        await Http.post("logout");
        setUser(false);
        localStorage.clear(); //destroy "connected" and "cellier"
        navigate("/");
    };

    //get les users
    const getUsagers = async () => {
        const usagers = await Http.get(`/users`);
        return usagers;
    };

    // rechercher des usagers
    const searchUsager = (search) => Http.get(`search/${search}`);

    const deleteUsager = async (id) => {
        const usagers = await Http.delete(`/user/${id}`);
        return usagers;
    };
    //put('/user/edit/{id}

    /**
     * Récupérer une usager par id
     * @param {number} id
     * @returns {object}
     */
    const getUsager = async (id) => {
        const usager = Http.get(`/user/${id}`);
        return usager;
    };

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                getUsagers,
                deleteUsager,
                updateUsager,
                searchUsager,
                getUsager,
                registerAdmin
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

/**
 * Hook pour appeler les différentes méthodes offertes par le Provider
 */
export const useUser = () => {
    return useContext(UserContext);
};
