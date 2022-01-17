import React, { useState } from "react";

export default function PetItem(props) {
  const pet = props.pet;
  const [petImage, setPetImage] = useState(pet.image);
  const changePetImage = () => {
    setPetImage(pet.image2);
  };

  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button onClick={changePetImage} type="button" class="btn btn-info">
            Pet
          </button>
        </div>
      </div>
    </div>
  );
}
