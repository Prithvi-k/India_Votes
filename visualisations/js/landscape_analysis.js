import { partyColours } from "./constants.js";

d3.csv("../dataset/data.csv")
    .then((data) => {

        const data_to_plot = {};

        data.forEach((d) => {
            if (!data_to_plot[d['year']]) {
                data_to_plot[d['year']] = {};
            }

            if (!data_to_plot[d['year']][d['party']]) {
                data_to_plot[d['year']][d['party']] = 0;
            }

            data_to_plot[d['year']][d['party']] += 1;
        });

        console.log(data_to_plot);
    }
    )
    .catch((error) => {
        console.error(error);
    }
    );

