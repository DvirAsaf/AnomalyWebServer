const fs = require('fs');

class TimeSeries{
//read csv file and split according ',' and enter the text to matrix
    constructor(CSVFile)
    {
        const csv = fs.readFileSync(CSVFile, { encoding: 'utf8', flag: 'r' });
        this.numOfFeatures = 0;
        let lines = csv.split(/\r?\n/).filter((line) => line.trim().length > 0);
        this.numOfLines = lines.length;
        this.feature = lines[0].split(',');
        this.numOfFeatures = this.feature.length;
        this.data = [];
        for (let i = 0; i < this.numOfLines; i++)
        {
            var cells = lines[i].split(",");
            this.data.push(cells);
        }
        this.matrix = new Array(this.numOfFeatures);
        for (let i = 0; i < this.numOfFeatures; ++i)
        {
            this.matrix[i] = new Array(this.numOfLines - 1);
        }
        for (let i = 0; i < this.numOfFeatures; i++)
        {
            for (let j = 1; j < this.numOfLines; j++)
            {
                this.matrix[i][j - 1] = this.data[j][i];
            }
        }
    }

    //get vector matrix
    get_vector_Matrix(i)
    {
        return this.matrix[i];
    }

    //get feature
    getFeature()
    {
        return this.feature;
    }

    //location of feature
    featureLocation(feature)
    {
        for (let i = 0; i < this.numOfFeatures; i++)
        {
            if (this.data[0][i] === feature)
            {
                return i;
            }
        }
        console.log('no match feature');
    }

    //get feature row values
    getRowValuesOfFeature(feature)
    {
        let location = this.featureLocation(feature);
        return this.get_vector_Matrix(location);
    }

    //get information number of lines
    getNumOfInfoLines()
    {
        return this.numOfLines - 1;
    }
}

module.exports= TimeSeries;