import Head from 'next/head'
import Menu from '../../components/Menu'
import styles from '../../styles/weather.module.css'
import { connectToDatabase } from '../../util/db.js'
import { API_KEY } from '../../api_key.json'

const day = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const forecast_length = 5;

const getTableHeaders = (days) => {
    let tbl_headers = [];
    for (let i = 0; i < days; i++) {
        tbl_headers.push(<th className={styles.dotw_headings}>{weekday[(day.getDay() + i) % 7]}</th>)
    }
    return tbl_headers;
}

const getIcons = (days, forecasts, daytime = true) => {
    let icons = [];
    for (let i = 0; i < days; i++) {
        if (daytime) {
            icons.push(<td><img src = {`/weather-icons/${forecasts[i].Day.Icon}.svg`} width="200px"></img></td>)
        } else {
            icons.push(<td><img src = {`/weather-icons/${forecasts[i].Night.Icon}.svg`} width="200px"></img></td>)
        }
    }
    return icons;
}

const getDescriptions = (days, forecasts, daytime = true) => {
    let descs = [];
    for (let i = 0; i < days; i++) {
        if (daytime) {
            descs.push(<td>{forecasts[i].Day.LongPhrase}</td>)
        } else {
            descs.push(<td>{forecasts[i].Night.LongPhrase}</td>)
        }
    }
    return descs;
}

const getMaxTemp = (days, forecasts) => {
    let max_temps = [];
    for (let i = 0; i < days; i++) {
        max_temps.push(<td>H: {forecasts[i].Temperature.Maximum.Value}</td>)
    }
    return max_temps
}

const getMinTemp = (days, forecasts) => {
    let min_temps = [];
    for (let i = 0; i < days; i++) {
        min_temps.push(<td>L: {forecasts[i].Temperature.Minimum.Value}</td>)
    }
    return min_temps
}

const getWindInfo = (days, forecasts, daytime = true) => {
    let wind_info = [];
    for (let i = 0; i < days; i++) {
        if (daytime) {
            wind_info.push(<td>Wind: {forecasts[i].Day.Wind.Speed.Value}{forecasts[i].Day.Wind.Speed.Unit}@{forecasts[i].Day.Wind.Direction.Degrees}</td>)
        } else {
            wind_info.push(<td>Wind: {forecasts[i].Night.Wind.Speed.Value}{forecasts[i].Night.Wind.Speed.Unit}@{forecasts[i].Night.Wind.Direction.Degrees}</td>)
        }
    }
    return wind_info
}

const getPercipitationInfo = (days, forecasts, daytime = true) => {
    let liquid = [];
    for (let i = 0; i < days; i++) {
        if (daytime) {
            liquid.push(<td>Percipitation: {forecasts[i].Day.TotalLiquid.Value}{forecasts[i].Day.TotalLiquid.Unit}</td>)
        } else {
            liquid.push(<td>Percipitation: {forecasts[i].Night.TotalLiquid.Value}{forecasts[i].Night.TotalLiquid.Unit}</td>)
        }
    }
    return liquid
}

function Weather({ weather }) {
    return (
        <div>

            <Head>
            <title>Weather Page</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <main>
                <h1 className={styles.headings}>Weather in Richmond Hill</h1>
                <div className={styles.headlines}>
                    <p><small>Last updated: {Date(weather.LastUpdatedTimeStamp).toLocaleString()}</small></p>
                    <p>
                        Current conditions: {weather.daily.Headline.Text}
                    </p>
                    <p>
                        Current conditions category: {weather.daily.Headline.Category}
                    </p>
                </div>
                <div className={styles.daily_forecasts}>
                    <table>
                        <thead>
                            <tr>
                                {getTableHeaders(5)}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.day_or_night}>Day</td>
                                <td className={styles.day_or_night}>Day</td>
                                <td className={styles.day_or_night}>Day</td>
                                <td className={styles.day_or_night}>Day</td>
                                <td className={styles.day_or_night}>Day</td>
                            </tr>
                            <tr>
                                {getIcons(forecast_length, weather.daily.DailyForecasts)}
                            </tr>
                            <tr>
                                {getDescriptions(forecast_length, weather.daily.DailyForecasts)}
                            </tr>
                            <tr>
                                {getMaxTemp(forecast_length, weather.daily.DailyForecasts)}
                            </tr>
                            <tr>
                                {getMinTemp(forecast_length, weather.daily.DailyForecasts)}
                            </tr>
                            <tr>
                                {getWindInfo(forecast_length, weather.daily.DailyForecasts)}
                            </tr>
                            <tr>
                                {getPercipitationInfo(forecast_length, weather.daily.DailyForecasts)}
                            </tr>
                            <tr>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                            </tr>
                            <tr>
                                {getIcons(forecast_length, weather.daily.DailyForecasts, false)}
                            </tr>
                            <tr>
                                {getDescriptions(forecast_length, weather.daily.DailyForecasts, false)}
                            </tr>
                            <tr>
                                {getWindInfo(forecast_length, weather.daily.DailyForecasts, false)}
                            </tr>
                            <tr>
                                {getPercipitationInfo(forecast_length, weather.daily.DailyForecasts, false)}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    )
}

const getWeatherFromDatabase = async () => {
    const { client } = await connectToDatabase();
    let weather = await client.db('weatherdb').collection("weather").find({}).toArray();
    weather = JSON.parse(JSON.stringify(weather));
    if (weather.length == 0) {
        throw new Error (
            "weatherdb error"
        );
    }
    weather = weather[weather.length - 1];
    return weather;
}

const updateWeatherDatabase = async (data) => {
    const { client } = await connectToDatabase();
    const weather = await client.db("weatherdb").collection("weather").insertOne(data);
}

const getDataFromAPI = async () => {
    console.log(API_KEY);
    let hourly = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/49581?apikey=${API_KEY}&metric=true&details=true`);
    hourly = await hourly.json();
    let daily = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/49581?apikey=${API_KEY}&metric=true&details=true`);
    daily = await daily.json();
    if (hourly.Code == "ServiceUnavailable" || daily.Code == "ServiceUnavailable" || hourly.Code == "Unauthorized" || daily.Code == "Unauthorized") {
        console.error("API Limit excedded");
        return false;
    }
    const weather_data = {
        "LastUpdatedTimeStamp": Date.now(),
        hourly,
        daily
    };
    console.log(weather_data);
    await updateWeatherDatabase(weather_data);
    return true;
}

export const getServerSideProps = async function () {
    let weather = await getWeatherFromDatabase();
    const last_updated_elapsed = ((Date.now() - weather.LastUpdatedTimeStamp) / 1000) / 3600;
    if (last_updated_elapsed > 1) {
        console.log("hello");
        getDataFromAPI();
        weather = await getWeatherFromDatabase();
    }

    return {
        props: {
            weather
        }
    }
}

export default Weather
