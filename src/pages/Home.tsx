
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const Home: React.FC = () => {
  const history = useHistory();
  const { contacts } = useContacts();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Contactos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonButton
          expand="block"
          onClick={() => history.push('/add')}
        >
          Agregar Contacto
        </IonButton>

        <IonList>
          {contacts.map((contact) => (
            <IonItem
              key={contact.id}
              button
              onClick={() => history.push(`/detail/${contact.id}`)}
            >
              <IonAvatar slot="start">
                <img src={contact.photo} alt={contact.name} />
              </IonAvatar>

              <IonLabel>
                <h2>{contact.name}</h2>
                <p>{contact.phone}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;

