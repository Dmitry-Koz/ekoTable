import './App.css';
import Demo from './Demo';
import { dataObject } from './services/dataTable';
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import Header from './conponents/Header/Header';
import ChartGraf from './conponents/ChartGraf/ChartGraf';
import React from 'react';
import BtnNav from './conponents/BtnNav/BtnNav';

const getData =  async (url) => {
  let result = await fetch(url);

  if (!result.ok){
    throw new Error(`Could not feth ${url} status ${result.status}`);
}
  return await result.json();
};

const  getDataForTable = await getData('https://api.escuelajs.co/api/v1/products');

function App() {

  const allDataStorage = {
    api: getDataForTable,
    cars: dataObject.cars,
    clothes: dataObject.clothes,
    countries: dataObject.countriesInfo,
  }

  const [dataForApi, setDataForApi] = React.useState(getDataForTable)
  const [dataForCars, setDataForCars] = React.useState(dataObject.cars)
  const [dataForClothes, setDataForClothes] = React.useState(dataObject.clothes)
  const [dataForCountry, setDataForCountry] = React.useState(dataObject.countriesInfo)

  const selectData = (page, value) => {
    switch(page){
      case 'Api':
        setDataForApi(value)
        break;
      case 'Cars':
        setDataForCars(value)
        break;
      case 'Clothes':
        setDataForClothes(value)
        break;
      case 'Country':
        setDataForCountry(value)
        break;
      default:
        return ''
    }
  }

  

  const nameForBtn = {
    car: allDataStorage.cars,
    api: allDataStorage.api,
    clothes: allDataStorage.clothes,
    country: allDataStorage.countries,
  };


  return (
    <Router>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={
              <>
                <div className="char-cont">
                  <ChartGraf dataProps={dataForApi}/>
                </div>

                <BtnNav nameObj={nameForBtn} page='Api' selectData={selectData}/>
                
                <Demo checkboxActive={true} dataRow={dataForApi}/>
              </>
            }/>
            <Route path='/cars' element={
              <Demo checkboxActive={true} dataRow={dataForCars} />
            }/>
            <Route path='/clothes' element={
              <Demo checkboxActive={true} dataRow={dataForClothes} />
            }/>
            <Route path='/countries' element={
              <Demo checkboxActive={true} dataRow={dataForCountry} />
            }/>
          </Routes>

        </main>
        
        
      </Router>
  );
}

export default App;
