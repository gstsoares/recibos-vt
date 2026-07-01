// 1. Vá no Firebase Console > Configurações do projeto (ícone de engrenagem) > Geral
// 2. Em "Seus apps", crie um app da Web (ícone </>) se ainda não tiver um
// 3. Copie o objeto "firebaseConfig" que aparece lá e cole substituindo os valores abaixo
// Essas chaves NÃO são secretas (são públicas em qualquer app web Firebase).
// IMPORTANTE: este app não tem login — quem tiver o link e essas chaves consegue ler e
// editar os dados. Não publique o link nem este repositório de forma pública/indexável.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABLgsViyQtTsjAZhgtDk0CQPfCdJ4yCt8",
  authDomain: "recibos-vt.firebaseapp.com",
  projectId: "recibos-vt",
  storageBucket: "recibos-vt.firebasestorage.app",
  messagingSenderId: "152160935766",
  appId: "1:152160935766:web:ecb0dc4575765f4df240f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
