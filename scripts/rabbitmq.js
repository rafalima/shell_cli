event = {
 "id":"id1",
 "timestamp":"2016-06-24T10:29:17.521"
};

itemList=["id1","id2","id3","id4"]

for (item in itemList) {
  event.id = itemList[item];
 
  document.querySelector("textarea[name=payload]").value = JSON.stringify(event);
 
  document.querySelector("input[value='Publish message']").click()
}