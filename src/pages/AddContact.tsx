
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './AddContact.css';
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
      <IonToolbar className="toolbar-add">
        <IonTitle>Agregar Contacto</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding fondo-add">

      <div className="contenedor-add">


        <IonItem className="item-add">
        

          <IonInput
            fill="outline"
            label="Nombre"
            labelPlacement="stacked"
            className="input-add"
            placeholder="Ingrese el nombre"
            onIonInput={(e) => setName(e.detail.value!)}
          />
        </IonItem>

        <IonItem className="item-add">
    
          <IonInput
            fill="outline"
            label="Teléfono"
            labelPlacement="stacked"
            className="input-add"
            placeholder="Ingrese el teléfono"
            onIonInput={(e) => setPhone(e.detail.value!)}
          />
        </IonItem>

        <IonItem className="item-add">
      
          <IonInput
            fill="outline"
            label="Correo"
            required
            labelPlacement="stacked"
            className="input-add"
            placeholder="Ingrese el correo"
            onIonInput={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>

        <IonItem className="item-add">
         
          <IonInput
            fill="outline"
            label="Dirección"
            labelPlacement="stacked"
            className="input-add"
            placeholder="Ingrese la dirección"
            onIonInput={(e) => setAddress(e.detail.value!)}
          />
        </IonItem>

        <IonItem className="item-add  url-add">
          

          <IonInput
            fill="outline"
            label="URL Foto"
            labelPlacement="stacked"
            className="input-add"
            placeholder="Ingrese la URL de la foto"
            value={photo}
            onIonInput={(e) => setPhoto(e.detail.value!)}
          />
        </IonItem>
        <div className="preview-imagen">

            {photo && (
                <IonImg src={photo} />
            )}

        </div>

        <IonButton
          className="boton-guardar"
          type = "submit"
          expand="block"
          onClick={saveContact}
        >
          Guardar Contacto
        </IonButton>

     
      </div>

    </IonContent>

  </IonPage>
);
  
};

export default AddContact;

