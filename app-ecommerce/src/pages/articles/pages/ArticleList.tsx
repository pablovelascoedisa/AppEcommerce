import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import ArticleCard from "../components/ArticleCard";

import { Article } from "../../../types/ArticleTypes";

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setArticles(res.data);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Artículos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {articles.length > 0 ? (
          articles.map((article: Article, index: number) => {
            return <ArticleCard key={index} articleData={article} />;
          })
        ) : (
          <p>No hay artículos</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ArticleList;
