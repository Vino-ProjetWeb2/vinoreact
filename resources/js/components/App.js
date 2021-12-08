import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { UserProvider } from "../context/user";
import GlobalStyles from "../components/styles/Global";
import { CellierProvider } from "../context/cellier";
import RequireAuth from "./RequireAuth";
import Loader from "./Loader";
import GlobalFonts from "../../fonts/fonts";

// lazy load les pages que le user demande au lieu de charger le bundle JS/CSS de toute l'app
const SeConnecter = lazy(() => import("../pages/SeConnecter"));
const CreerCompte = lazy(() => import("../pages/CreerCompte"));
const TestStyle = lazy(() => import("../pages/TestStyle"));
const Accueil = lazy(() => import("../pages/Accueil"));
const Cellier = lazy(() => import("../pages/Cellier"));
const Bouteille = lazy(() => import("../pages/Bouteille"));
const AjouterBouteille = lazy(() => import("../pages/AjouterBouteille"));

const App = () => (
    // le user connecté est rendu disponible dans toute l'app via context
    <Router>
        <UserProvider>
            <CellierProvider>
                <GlobalFonts />
                <GlobalStyles />

                {/* afficher un fallback au chargement de la page avec Suspense: un spinner ou la page de loading vino? */}
                <Suspense fallback="">
                    <Routes>
                        <Route path="/" element={<SeConnecter />} />
                        <Route
                            path="/nouveau-compte"
                            element={<CreerCompte />}
                        />
                        <Route path="/test-style" element={<TestStyle />} />
                        <Route
                            path="/celliers"
                            element={
                                <RequireAuth>
                                    <Accueil />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/:cellier"
                            element={
                                <RequireAuth>
                                    <Cellier />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path=":cellier/:bouteilleId"
                            element={
                                <RequireAuth>
                                    <Bouteille />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="/:celliers/nouvelle-bouteille"
                            element={
                                <RequireAuth>
                                    <AjouterBouteille />
                                </RequireAuth>
                            }
                        />
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </Suspense>
            </CellierProvider>
        </UserProvider>
    </Router>
);

export default App;
