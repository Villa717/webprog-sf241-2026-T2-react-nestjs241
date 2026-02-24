import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class GuestbookService {
  private supabase = createClient(
    process.env.SUPABASE_URL || '',
    process.env.SUPABASE_KEY || ''
  );

  async findAll() {
    const { data } = await this.supabase.from('guestbook').select('*');
    return data;
  }

  async create(payload: any) {
    const { data } = await this.supabase.from('guestbook').insert([payload]);
    return data;
  }

  async update(id: string, payload: any) {
    const { data } = await this.supabase.from('guestbook').update(payload).eq('id', id);
    return data;
  }

  async delete(id: string) {
    const { data } = await this.supabase.from('guestbook').delete().eq('id', id);
    return data;
  }
}