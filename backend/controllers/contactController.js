const supabase = require("../config/supabase")

exports.submitContact = async (req, res) => {

  const { name, email, phone, service, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      success:false,
      message:"Required fields missing"
    })
  }

  try {

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        { name, email, phone, service, message }
      ])

    if (error) throw error

    res.json({
      success:true,
      message:"Contact stored successfully"
    })

  } catch(err){

    console.error(err)

    res.status(500).json({
      success:false,
      message:"Database error"
    })
  }
}