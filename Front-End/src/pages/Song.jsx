import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const currentSongIndex = songsArrayFromArtist.findIndex(
    (song) => song._id === id
  );

  const nextSongId =
    currentSongIndex !== -1 &&
    currentSongIndex < songsArrayFromArtist.length - 1
      ? songsArrayFromArtist[currentSongIndex + 1]._id
      : songsArrayFromArtist[0]._id; // Volta para a primeira se for a última

  const previousSongId =
    currentSongIndex !== -1 && currentSongIndex > 0
      ? songsArrayFromArtist[currentSongIndex - 1]._id
      : songsArrayFromArtist[songsArrayFromArtist.length - 1]._id; // Volta para a última se for a primeira

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Música ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          nextSong={nextSongId}
          prevSong={previousSongId}
          audio={audio}
        />

        <div className="song__info">
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
