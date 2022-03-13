import http from "../http-common";

class ListItemDataService {
  getAll() {
    return http.get("/listItems");
  }

  getActive() {
    return http.get("/listItems/active/");
  }

  get(id) {
    return http.get(`/listItems/${id}`);
  }

  create(data) {
    return http.post("/listItems", data);
  }

  createSale(id, data) {
    return http.put(`/listItems/sale/${id}`, data);
  }

  update(id, data) {
    return http.put(`/listItems/${id}`, data);
  }

  delete(id) {
    return http.delete(`/listItems/${id}`);
  }

  deleteSale(id, saleID, data) {
    return http.delete(`/listItems/sale/${id}/${saleID}`);
  }

  deleteAll() {
    return http.delete(`/listItems`);
  }

  findByName(name) {
    return http.get(`/listItems?name=${name}`);
  }
}

export default new ListItemDataService();