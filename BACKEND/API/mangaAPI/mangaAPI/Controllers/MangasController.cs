using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace mangaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MangasController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public MangasController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT * FROM  MANGAS ORDER BY ID ASC";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MangasAppCon");
            SqlDataReader reader;


            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand conCommand = new SqlCommand(query, con))
                {
                    reader = conCommand.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    con.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Mangas mang)
        {
            string query = @"INSERT INTO MANGAS 
                             VALUES (@NAME, @AUTHOR, @STARS, @CATEGORY)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MangasAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NAME", mang.NAME);
                    myCommand.Parameters.AddWithValue("@AUTHOR", mang.AUTHOR);
                    myCommand.Parameters.AddWithValue("@STARS", mang.STARS);
                    myCommand.Parameters.AddWithValue("@CATEGORY", mang.CATEGORY);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Manga added successufy");
        }

    }
}
