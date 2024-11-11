using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebRole1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Página de Inicio";
            ViewBag.ApplicationName = "Created by Taylor Balmaceda";
            return View();  // Renderiza la vista Index.cshtml
        }

        public ActionResult Info()
        {
            ViewBag.Title = "Información";
            ViewBag.ApplicationName = "Created by Taylor Balmaceda";
            return View();
        }
    }
}


