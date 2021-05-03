using ChartsWebApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ChartsWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PieController : ControllerBase
    {
        private IHubContext<PieHub> _hub;
        public PieController(IHubContext<PieHub> hub)
        {
            _hub = hub;
        }

        [HttpGet]
        [Route("GetDataSets")]
        public List<PieChart> GetData()
        {
            PieChartManager PM = new PieChartManager();
            Thread oThread = new Thread(() =>
            {
                KeepSendingResults();
            });
            oThread.Start();
            return PM.GetDataSet();
        }

        public void KeepSendingResults()
        {
            while (true)
            {
                PieChartManager PM = new PieChartManager();
                _hub.Clients.All.SendAsync("NewResults", PM.GetDataSet());
                Thread.Sleep(3000);
            }
        }
    }
}
