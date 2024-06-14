import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Generate = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState('');
  const generateLink = () => {
    setLink(
      `https://birthday.netlify.app/birthday/${name}/${day}/${month}`
    );
  };
  return (
    <div className='page'>
      <h1>Düzenle</h1>
      <div className='form'>
        <input
          type='text'
          placeholder='İsim giriniz'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Gün giriniz'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          max={31}
          min={1}
        />
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value=''>Ay seçiniz</option>
          <option selected value='1'>
            Ocak
          </option>
          <option value='2'>Şubat</option>
          <option value='3'>Mart</option>
          <option value='4'>Nisan</option>
          <option value='5'>Mayıs</option>
          <option value='6'>Haziran</option>
          <option value='7'>Temmuz</option>
          <option value='8'>Ağustos</option>
          <option value='9'>Eylül</option>
          <option value='10'>Ekim</option>
          <option value='11'>Kasım</option>
          <option value='12'>Aralık</option>
        </select>
      </div>
      <button className='btn' onClick={() => generateLink()}>
        Düzenle
      </button>

      {link !== '' ? (
        <>
          <p className='gen-link'>{link}</p>
          <Link to={`birthday/${name}/${day}/${month}`}>
            <button className='btn'>Git</button>
          </Link>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Generate;
