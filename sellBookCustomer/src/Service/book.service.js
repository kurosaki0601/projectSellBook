import BaseService from "./base.service";
import http from "./services.js";

class bookExtend extends BaseService {
  list(filter = null) {
    return http.get(`/api/collections/${this.name}/records?expand=category`, {
      params: filter,
    });
  }
  filter(ids) {
    let filterString = ids.map((id) => `(category = "${id}")`).join("||");
    return http.get(
      `/api/collections/${this.name}/records?filter=${filterString}`
    );
  }
  searchName(value) {
    return http.get(
      `/api/collections/${this.name}/records?filter=(name ~ "${value}")`
    );
  }
  readNew(id) {
    return http.get(
      `/api/collections/${this.name}/records/${id}?expand=category`
    );
  }
}

const bookService = new bookExtend("book");

export default bookService;
