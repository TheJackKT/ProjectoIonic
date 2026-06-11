
import {
  IonButton,
  IonContent,
  IonCardContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonAvatar
} from '@ionic/react';

import './Home.css';
import { useHistory } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const Home: React.FC = () => {
  const history = useHistory();
  const { contacts } = useContacts();

  return (
    <IonPage>

  <IonHeader>
    
      <IonTitle>Mis Contactos</IonTitle>

  </IonHeader>

  <IonContent className="ion-padding fondo-home">

    <IonCardContent className="card-home">

      <IonButton
        className="button-add"
        expand="block"
        onClick={() => history.push('/add')}
      >
        Agregar Contacto
      </IonButton>

      <IonList className="lista-contactos">

        {contacts.map((contact) => (

          <IonItem
            className="contact-item"
            key={contact.id}
            button
            onClick={() => history.push(`/detail/${contact.id}`)}
          >

            <IonAvatar
              slot="start"
              className="contacto-avatar"
            >
              <img
                src={contact.photo}
                alt={contact.name}
              />
            </IonAvatar>

            <IonLabel className="contacto-label">
              <h2>{contact.name}</h2>
              <p>{contact.phone}</p>
            </IonLabel>

          </IonItem>

        ))}

      </IonList>


    </IonCardContent>

  </IonContent>

</IonPage>
  );
};

export default Home;

