import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, ArcElement, BarElement, PointElement, LineElement, Legend, Title  } from 'chart.js';
Chart.register(CategoryScale, LinearScale, ArcElement, BarElement, PointElement, LineElement, Legend, Title);

function Graphique() {
  const [pieChartData, setPieChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);

  useEffect(() => {
    // Données pour le graphique Pie (Camembert)
    const pieData = {
      labels: ["Céréale", "Pomme de terre", "Betteraves sucrières", "Légume", "Fruits", "Fruits sous serre"],
      datasets: [
        {
          data: [3480, 15155, 12100, 1137, 567.65, 178.15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
        },
      ],
    };

    // Données pour le graphique Bar (Barre)
    const barData = {
      labels: ["Céréale", "Pomme de terre", "Betteraves sucrières"],
      datasets: [
        {
          label: "sableux",
          data: [193, 988, 425],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: "argileux",
          data: [694, 860, 258],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
        {
          label: "limoneux",
          data: [104, 143, 64],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
        {
          label: "argileux avec apport",
          data: [1605, 3152, 2690],
          backgroundColor: 'rgba(255, 206, 86, 0.6)',
        },
        {
          label: "sableux avec apport",
          data: [713, 7545, 7217],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: "limoneux avec apport",
          data: [54, 1780, 1324],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
        },
      ],
    };

    // Données pour le graphique Line (Courbe)
    const lineData = {
      labels: [
        "sableux",
        "argileux",
        "limoneux",
        "argileux avec apport",
        "sableux avec apport",
        "calcaire",
        "limoneux avec apport",
        "siliceux",
        "argilo tourbeuse",
        "humifère",
        "tourbeuse",
      ],
      datasets: [
        {
          label: "Céréale",
          data: [193, 694, 104, 1605, 713, 5, 54, 4, 11, 60, 37],
          borderColor: 'yellow',
          backgroundColor: 'rgba(0, 128, 0, 0.6)'
        },
        {
            label: "Pomme de terre",
            data: [988, 860, 143, 3152, 7545, 59, 1780, 11, 287, 244, 86],
            borderColor: 'brown',
            backgroundColor: 'brown',
          },
          {
            label: "Betteraves sucrière",
            data: [425, 258, 64, 2690, 7217, 55, 1324, 0, 59, 5, 3],
            borderColor: '',
            backgroundColor: '',
          },
          {
            label: "Légume",
            data: [37, 401, 44, 467, 139, 2, 4, 45, 0, 0.4, 0.7, 0.5],
            borderColor: 'green',
            backgroundColor: 'green',
          },
          {
            label: "Fruits",
            data: [16, 56, 26, 262, 164, 35, 8.5, 0, 0.02, 0.08, 0.05],
            borderColor: 'orange',
            backgroundColor: 'orange',
          },
          {
            label: "Fruits sous serre",
            data: [56, 557, 89, 783, 304.5, 37.45, 54.05, 0, 0.42, 0.8, 0.58],
            borderColor: 'rgba(255, 99, 132, 0.6)',
            backgroundColor: 'green',
          },
       
      ],
    };

    setPieChartData(pieData);
    setBarChartData(barData);
    setLineChartData(lineData);
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="">famille jerry</h1>
        <nav className="mb-5">
          <Link to="/">Présentation</Link>
          <Link to="/graphique">Graphique</Link>
          <Link to="/e-commerce">E-Commerce</Link>
          <Link to="/prediction">Prédiction</Link>
          <Link to="/supervision">Supervision</Link>
        </nav>
      </header>
      <section>
      <div className="row">
  <div className="col-md-6">
    <div className="chart-container" style={{ height: '450px', marginTop: '-70px', marginLeft:'50px' }}>
      {pieChartData && (
        <Pie
          data={pieChartData}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'right',
                labels: {
                  boxWidth: 16,
                  padding: 20,
                  font: {
                    size: 14
                  },
                },
                
              },
             
            },
            
          }}
        />
      )}
    </div>
  </div>
  <div className="col-md-6">
    <div className="chart-container" style={{ height: '450px', marginTop: '0px' }}>
      {barChartData && (
        <Bar
          data={barChartData}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              
            },
            
          }}
        />
      )}
    </div>
  </div>
</div>

        <div className="row">
          <div className="col-md-12">
            <div className="chart-container" style={{ marginTop: '-100px' }}>
              {lineChartData && (
                <Line
                  data={lineChartData}
                  options={{
                    title: {
                      display: true,
                      text: "Productivité par Type de sol (Courbe)",
                    },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="chart-container">
          {/* Vous pouvez ajouter d'autres graphiques ici dans le pied de page */}
        </div>
      </footer>
    </div>
  );
}

export default Graphique;
