import {
  IonButton,

  IonText,
  IonCardContent,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonTitle
} from '@ionic/react';

import './Login.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const usuarios = [
    {
      usuario: 'Javier',
      clave: 'waos'
    },

    {

      usuario: 'Andrea',
      clave: '1218'
    },

    {
      usuario: 'Jazmin',
      clave: '182'
    },
   
   {
      usuario: 'admin',
      clave: '123'
    }
  
  ]

const Login: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')

  const login = () => {

    const findUser = usuarios.find(
      u =>
        u.usuario === user &&
        u.clave === password
    )


    if (findUser) {
      history.push('/home');
    } else {
      setMessage('Usuario o contraseña incorrectos')
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding fondo-login">
        

      <IonCardContent className="card-login"> 

     <IonTitle>Agenda de Contactos</IonTitle>
        <IonItem>
       
          <IonInput
              placeholder="Ingrese su usuario"
              fill="outline"
              label="Usuario"
              className="input-usuario"
              labelPlacement="stacked"
            value={user}
            onIonInput={(e) => setUser(e.detail.value!)}
          />
         
        </IonItem>

        <IonItem>
        
          <IonInput
              placeholder="Ingrese su contraseña"
              fill="outline"
              label="Contraseña"
              className="input-usuario"
              labelPlacement="stacked"
            type="password"
            value={password}
            onIonInput={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" className="boton-login" onClick={login}>
          Iniciar Sesión
        </IonButton>
        <IonText color="danger">
              <p className="mensaje-error">
                {message}
              </p>
            </IonText>
    

      </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;