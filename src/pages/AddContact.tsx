
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
import { useHistory } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const AddContact: React.FC = () => {

  const history = useHistory();
  const { addContact } = useContacts();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('');

  const saveContact = () => {
    addContact({
      id: Date.now(),
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
          <IonTitle>Agregar Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonItem>
          <IonLabel position="stacked">Nombre</IonLabel>
          <IonInput onIonInput={(e) => setName(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Teléfono</IonLabel>
          <IonInput onIonInput={(e) => setPhone(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Correo</IonLabel>
          <IonInput onIonInput={(e) => setEmail(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Dirección</IonLabel>
          <IonInput onIonInput={(e) => setAddress(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">URL Foto</IonLabel>
          <IonInput onIonInput={(e) => setPhoto(e.detail.value!)} />
        </IonItem>

        <IonButton expand="block" onClick={saveContact}>
          Guardar
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default AddContact;

