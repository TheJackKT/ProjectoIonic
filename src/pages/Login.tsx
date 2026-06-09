
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Login: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (user && password) {
      history.push('/home');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle>Agenda de Contactos</IonTitle>

        <IonItem>
          <IonLabel position="stacked">Usuario</IonLabel>
          <IonInput
            value={user}
            onIonInput={(e) => setUser(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Contraseña</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonInput={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" onClick={login}>
          Iniciar Sesión
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;