import React from "react";
import styles from "./Graph.module.scss";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto';
import { useGraph } from "./hooks/useGraph";
import { Button } from '@consta/uikit/Button';
import { Loader } from '@consta/uikit/Loader';

Chart.register(CategoryScale)

const Graph = () => {
    const {
        graphDate,
        graphPrice,
        fetchGraphForWeek,
        fetchGraphForYear,
        fetchGraphFor3Month,
        isGraphLoading
    } = useGraph();

    const data = {
        labels: graphDate,
        datasets: [
            {
                label: 'График валют',
                data: graphPrice,
                fill: true,
                borderColor: 'rgb(0, 55, 144)',
                backgroundColor: 'rgba(0, 55, 144, .5)',
            }
        ],
    };

    return (
        <div className={styles.graphWrapper}>
            <section className={styles.section}>
                <Button
                    className={styles.section__btn}
                    label="За 3 месяца"
                    onClick={fetchGraphFor3Month}
                />
                <Button
                    className={styles.section__btn}
                    label="За неделю"
                    onClick={fetchGraphForWeek}
                />
                <Button
                    className={styles.section__btn}
                    label="За год"
                    onClick={fetchGraphForYear}
                />
            </section>
            {isGraphLoading
                ? <div className={styles.loader}> <Loader size="m" /></div>
                :
                <div className={styles.graph}>
                    <Line data={data} />
                </div>
            }
        </div>
    )
}

export default Graph;