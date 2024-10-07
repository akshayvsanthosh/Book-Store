import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allBooks: any[], searchKey:string): any[] {
    const result:any=[]

    if (!allBooks || searchKey=="") {
      return allBooks
    } else {
      allBooks.forEach((book:any)=>{
        if (book['bookName'].toLowerCase().includes(searchKey.toLowerCase())) {
          result.push(book)
        }
      })
    }
    return result;
  }

}
