
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg
} from '@ionic/react';

import { useHistory, useParams } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const ContactDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const { contacts, deleteContact } = useContacts();

  const contact = contacts.find(
    (c) => c.id === Number(id)
  );

  if (!contact) {
    return <IonPage><IonContent>Contacto no encontrado</IonContent></IonPage>;
  }

  const removeContact = () => {
    deleteContact(contact.id);
    history.push('/home');
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalle</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>

          <IonImg src={contact.photo} 
          style={{ maxWidth: '400px', height: '100%' }}/>

          <IonCardHeader>
            <IonCardTitle>{contact.name}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <p><strong>Teléfono:</strong> {contact.phone}</p>
            <p><strong>Correo:</strong> {contact.email}</p>
            <p><strong>Dirección:</strong> {contact.address}</p>

          </IonCardContent>

        </IonCard>

        <IonButton
          expand="block"
          onClick={() => history.push(`/edit/${contact.id}`)}
        >
          Editar
        </IonButton>

        <IonButton
          color="danger"
          expand="block"
          onClick={removeContact}
        >
          Eliminar
        </IonButton>

      </IonContent>

    </IonPage>
  );
};

export default ContactDetail;

