import React, { useEffect, useState } from "react";

interface formInterface {
  id: string;
  title: string;
}

const initialForm = {
  id: "",
  title: "",
};

const Register: React.FC = () => {
  const [contador, setContador] = useState(Number);
  const [formData, setFormData] = useState<formInterface>(initialForm);

  useEffect(() => {
    setFormData({
      id: "ds",
      title: "DSADAS",
    });
  });

  return <h1>dasd</h1>;
};

export default Register;
