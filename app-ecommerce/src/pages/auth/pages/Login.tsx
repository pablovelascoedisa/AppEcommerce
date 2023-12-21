import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../../components/ExploreContainer";
import { Redirect, useHistory } from "react-router";
import { useState } from "react";
import { IonAlert, IonButton } from "@ionic/react";
import axios from "axios";
import "../styles/Login.css";

import { formInterface } from "../../../types/AuthTypes";

const initialForm = {
  usuario: {
    value: "",
    error: false,
  },
  password: {
    value: "",
    error: false,
  },
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<formInterface>(initialForm);

  const validateFormInput = (
    field: string,
    value: string | undefined | null
  ) => {
    if (!value) {
      setFormData({ ...formData, [field]: { value, error: true } });
    } else {
      setFormData({ ...formData, [field]: { value, error: false } });
    }
  };

  const canRegisterUser = () => {
    let allOk = 0;

    (Object.keys(formData) as (keyof formInterface)[]).forEach((atr) => {
      if (!formData[atr].error && formData[atr].value !== "") {
        allOk++;
      }
    });

    return allOk === Object.keys(formData).length;
  };

  const submitLogin = () => {
    /**
     * Made your axios request
     */
    // axios
    //   .post("https://fakestoreapi.com/productsdasda")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    localStorage.setItem("token", "1234");
  };

  return (
    <IonPage>
      <div className="login-container">
        <img src="/assets/login.png" />
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1.4rem",
          }}
        >
          Login
        </h1>
        <div className="login-form-list">
          <IonInput
            label="Usuario"
            labelPlacement="floating"
            fill="outline"
            onIonInput={(e) => {
              validateFormInput("usuario", e.detail.value);
            }}
            style={{
              marginBottom: "1rem",
            }}
          />
          <IonInput
            label="Contraseña"
            type="password"
            labelPlacement="floating"
            fill="outline"
            onIonInput={(e) => {
              validateFormInput("password", e.detail.value);
            }}
            style={{
              marginBottom: "1rem",
            }}
          />
          <IonButton
            style={{ width: "100%", marginTop: "1.3rem" }}
            disabled={!canRegisterUser()}
            onClick={() => {
              submitLogin();
            }}
          >
            Iniciar Sesión
          </IonButton>
        </div>
      </div>
    </IonPage>
  );
};

export default Login;
