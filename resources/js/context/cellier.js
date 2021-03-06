import { createContext, useContext } from "react";
import axios from "axios";
import Http from "../HttpClient";

/**
 * Création du contexte Cellier
 */
const CellierContext = createContext();

/**
 * Création du Provider cellier
 */
export const CellierProvider = ({ children }) => {
    /**
     * Récupérer toutes les bouteilles d'un cellier
     * @param {number} cellierId
     * @param {number} pageNum
     * @returns {array}
     */
    const getBouteillesCellier = (cellierId, pageNum) =>
        Http.get(`bouteilles/cell/${cellierId}/?page=${pageNum}`);

    /**
     * Récupérer une bouteille par id
     * @param {number} bouteilleId
     * @returns {object}
     */
    const getBouteille = async (bouteilleId) =>
        Http.get(`bouteilles/${bouteilleId}`);

    /**
     * Récupérer les Bouteilles Wiki
     * @returns {object}
     */
     const getBouteillesWiki  = async () => {
        const bouteilles = await Http.get(`wiki/`);
        return bouteilles;
    };
    /**
     * Rechercher une bouteille dans le wiki
     * @param {string} search
     * @returns {array}
     */
    const searchCellier = (cellierId, search) =>
        Http.get(`/bouteilles/${cellierId}/${search}`);

    /**
     * Ajouter une bouteille dans un cellier
     * @param {object} bouteille
     * @returns {object}
     */
    const addBouteille = (bouteille) =>
        Http.post("bouteilles/create", bouteille);

    /**
     * Récupérer les catégories de vin
     * @returns {array}
     */
    const getCategories = () => Http.get("categories");

    /**
     * Uploader une image dans cloudinary
     * @param {file} img
     * @returns {object}
     */
    const uploadImage = async (img) => {
        const formData = new FormData();
        formData.append("file", img);
        formData.append("upload_preset", "knxwwgoa");

        return axios.post(
            "https://api.cloudinary.com/v1_1/vino-project/image/upload",
            formData
        );
    };

    /**
     * Mise à jour de la quantité
     * @param {number} bouteilleId
     * @param {number} quantite
     * @returns {object}
     */
    const updateQty = (bouteilleId, quantite) =>
        Http.put(`bouteilles/editField/${bouteilleId}`, { quantite });

    /**
     * Mise à jour d'une bouteille
     * @param {number} bouteilleId
     * @param {object} update
     * @returns {object}
     */
    const modifierBouteille = (bouteilleId, update) =>
        Http.put(`/bouteilles/edit/${bouteilleId}`, update);


    // Wiki ........
    const addBouteilleWiki = (bouteille) =>
        Http.post("wiki/create", bouteille);

    const modifierBouteilleWiki = (bouteilleId, update) =>
        Http.put(`/wiki/edit/${bouteilleId}`, update);

    const supprimerBouteilleWiki = async (bouteilleId) => {
        console.log(bouteilleId)
        Http.delete(`wiki/${bouteilleId}`);
    }


    const getBouteilleWiki = async (bouteilleId) =>
        Http.get(`wiki/${bouteilleId}`);

    
    /**
     * Rechercher une bouteille dans le wiki
     * @param {string} search
     * @returns {array}
     */
     const searchWiki = (search) => Http.get(`searchWiki/${search}`);

    /**
     * Supprimer une bouteille
     * @param {number} bouteilleId
     * @returns {void}
     */
    const supprimerBouteille = async (bouteilleId) =>
        Http.delete(`bouteilles/${bouteilleId}`);

    /**
     * Mettre à jour la note d'une bouteille
     * @param {number} bouteilleId
     * @param {number} noteNew
     * @returns {void}
     */
    const updateNoteBouteille = (bouteilleId, noteNew) =>
        Http.put(`bouteilles/editField/${bouteilleId}`, {
            note: `${noteNew}`,
        });

    return (
        <CellierContext.Provider
            value={{
                addBouteille,
                getBouteille,
                getBouteillesCellier,
                getCategories,
                modifierBouteille,
                searchWiki,
                searchCellier,
                supprimerBouteille,
                updateNoteBouteille,
                uploadImage,
                updateQty,
                getBouteillesWiki,
                addBouteilleWiki,
                modifierBouteilleWiki,
                supprimerBouteilleWiki,
                getBouteilleWiki,
            }}
        >
            {children}
        </CellierContext.Provider>
    );
};

/**
 * Hook pour appeler les différentes méthodes et offertes par le Provider
 */
export const useCellier = () => {
    return useContext(CellierContext);
};
