const db = require('./_database')

async function updateData(){
  await db.connect()

  const queryDeletar = "delete from evento_participante where evento_id=1 and participante_id=1"  

  await db.query(queryDeletar)
  const queryParticipante = "update participante set nome='Carlos Augusto' where id=1"

  await db.query(queryParticipante)
  await db.end()

  result = await db.query("SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id")
  console.log("EVENTOS COM PARTICIPANTES:")
  console.log(result.rows);
  
}

updateData()
