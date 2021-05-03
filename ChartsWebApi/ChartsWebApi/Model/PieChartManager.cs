using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChartsWebApi.Model
{
    public class PieChartManager
    {
        public List<PieChart> GetDataSet()
        {
            string[] nameList = { "a", "b", "c", "d", "e" };
            string[] colorList = { "#f22121", "#393e46", "#00adb5", "#e8913a", "#506ef9"};
            List<PieChart> pieChartsList = new List<PieChart>();
            var r = new Random();
            for (int i = 0; i < nameList.Length; i++)
            {
                var pie = new PieChart();
                pie.name = string.Format("{0}", nameList[i]);
                pie.y = r.Next(1, 100);
                pie.color = string.Format("{0}", colorList[i]);
                pieChartsList.Add(pie);
            }
            return pieChartsList;
        }
    }

    public class PieHub: Hub
    {

    }
}
