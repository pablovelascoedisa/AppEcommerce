import React from "react";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import { star } from "ionicons/icons";

import "../styles/ArticleCard.css";

import { ArticleCardProps } from "../../../types/ArticleTypes";

const ArticleCard: React.FC<ArticleCardProps> = ({ articleData }) => {
  return (
    <IonCard className="list-article-card">
      <div className="card-image-container">
        <img alt={articleData.title} src={articleData.image} />
      </div>
      <IonCardHeader>
        <IonCardTitle>{articleData.title}</IonCardTitle>
        <IonCardSubtitle>
          {articleData.category.substring(0, 1).toUpperCase() +
            articleData.category.substring(1)}
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent
        style={{
          paddingTop: "13px",
        }}
      >
        <div>
          <p className="card-rating">
            <span>
              <IonIcon icon={star} />
            </span>
            {articleData.rating?.rate}
          </p>
          <p className="card-price">{articleData.price} €</p>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ArticleCard;
