
using cNetMvc.Model;
using cNetMvc.Repository;
using Microsoft.AspNetCore.Mvc;

namespace cNetMvc.Controllers
{
 [ApiController]
 [Route("api/[controller]")]
 public class ClienteController : ControllerBase
 {
  private readonly IClienteRepository _repository;

  public ClienteController(IClienteRepository repository)
  {
   _repository = repository;
  }

  [HttpGet]
  public string Hello()
  {
   return "Hello";
  }

  [HttpPost]
  public async Task<IActionResult> Post(Cliente cliente)
  {
   _repository.AddCliente(cliente);

   return await _repository.SaveChangesAsync() ? Ok("Cliente Adicionado") : BadRequest("Tentativa falhou");
  }
 }
}