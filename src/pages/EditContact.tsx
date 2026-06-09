
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const EditContact: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const { contacts, updateContact } = useContacts();

  const contact = contacts.find(
    (c) => c.id === Number(id)
  );

  const [name, setName] = useState(contact?.name || '');
  const [phone, setPhone] = useState(contact?.phone || '');
  const [email, setEmail] = useState(contact?.email || '');
  const [address, setAddress] = useState(contact?.address || '');
  const [photo, setPhoto] = useState(contact?.photo || '');

  if (!contact) {
    return <IonPage><IonContent>Contacto no encontrado</IonContent></IonPage>;
  }

  const saveChanges = () => {
    updateContact({
      id: contact.id,
      name,
      phone,
      email,
      address,
      photo
    });

    history.push('/home');
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonItem>
          <IonLabel position="stacked">Nombre</IonLabel>
          <IonInput
            value={name}
            onIonInput={(e) => setName(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Teléfono</IonLabel>
          <IonInput
            value={phone}
            onIonInput={(e) => setPhone(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Correo</IonLabel>
          <IonInput
            value={email}
            onIonInput={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Dirección</IonLabel>
          <IonInput
            value={address}
            onIonInput={(e) => setAddress(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">URL Foto</IonLabel>
          <IonInput
            value={photo}
            onIonInput={(e) => setPhoto(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" onClick={saveChanges}>
          Guardar Cambios
        </IonButton>

      </IonContent>

    </IonPage>
  );
};

export default EditContact;
