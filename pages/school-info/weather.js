import Head from 'next/head'
import Menu from '../../components/Menu'
import styles from '../../styles/weather.module.css'
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
                    <p><small>Last updated {weather.Headline.EffectiveDate}</small></p>
                    <p>
                        Current conditions: {weather.Headline.Text}
                    </p>
                    <p>
                        Current conditions category: {weather.Headline.Category}
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
                                {getIcons(forecast_length, weather.DailyForecasts)}
                            </tr>
                            <tr>
                                {getDescriptions(forecast_length, weather.DailyForecasts)}
                            </tr>
                            <tr>
                                {getMaxTemp(forecast_length, weather.DailyForecasts)}
                            </tr>
                            <tr>
                                {getMinTemp(forecast_length, weather.DailyForecasts)}
                            </tr>
                            <tr>
                                {getWindInfo(forecast_length, weather.DailyForecasts)}
                            </tr>
                            <tr>
                                {getPercipitationInfo(forecast_length, weather.DailyForecasts)}
                            </tr>
                            <tr>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                                <td className={styles.day_or_night}>Night</td>
                            </tr>
                            <tr>
                                {getIcons(forecast_length, weather.DailyForecasts, false)}
                            </tr>
                            <tr>
                                {getDescriptions(forecast_length, weather.DailyForecasts, false)}
                            </tr>
                            <tr>
                                {getWindInfo(forecast_length, weather.DailyForecasts, false)}
                            </tr>
                            <tr>
                                {getPercipitationInfo(forecast_length, weather.DailyForecasts, false)}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    )
}

export async function getStaticProps() {
    // TODO: Add more info about the current conditions.
    // TODO: Switch out this link for the real api.
    const res = await fetch('http://192.168.100.133:8000/api.json')
   // const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/49581?apikey=${API_KEY}&metric=true&details=true`)

    /*
    TODO:
    Possible strategy to reduce API calls:
        - On every API call, create a timestamp for that call to show how old the data is
        - On every subsequent call, check if the last request was made in the last hour
            - If so, reuse the previous data
            - Else, make a new call and update the timestamp

        This strategy will reduce API calls to a maximum of 24 per day (Accessed every hour).
        Additionally, we can add "Last updated: {x} minutes ago" to the page, where x is the time between the last API call and the current time.

    @Matthew if you have any questions let me know (Jason)
    */
    const weather = await res.json()

    return {
        props: {
            weather,
        },
    }
}

export default Weather