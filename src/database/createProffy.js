module.exports = async (db, {proffyValue, classValue, classSchedule}) =>{
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
      ${proffyValue.name},
      ${proffyValue.avatar},
      ${proffyValue.whatsapp},
      ${proffyValue.bio}
    );
  `)
  
}